<template>
  <h1 class="fade-in">Formulaire de contact</h1>
  <div class="form-container fade-in">
    <form @submit.prevent="sendEmail">
      <div class="form-group">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Téléphone :</label>
        <input type="text" id="phone" v-model="form.phone" />
      </div>
      <div class="form-group">
        <label for="message">Message :</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <!-- reCAPTCHA -->
      <div class="recaptcha">
        <vue-recaptcha
          sitekey="6LfKmsYqAAAAAGtYAiJN1oroldPENUSFPeS5mVBI"
          @verify="onCaptchaVerified"
          @expired="onCaptchaExpired"
        ></vue-recaptcha>
      </div>

      <!-- Bouton centré -->
      <div class="button-container">
        <button type="submit" :disabled="!captchaVerified">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import emailjs from "emailjs-com";
import VueRecaptcha from "vue-recaptcha-v3";

export default {
  components: { VueRecaptcha },
  setup() {
    const form = ref({ name: "", email: "", phone: "", message: "" });
    const captchaVerified = ref(false);

    const onCaptchaVerified = (response) => {
      console.log("reCAPTCHA validé :", response);
      captchaVerified.value = true;
    };
    const onCaptchaExpired = () => {
      console.log("reCAPTCHA expiré !");
      captchaVerified.value = false;
    };
    const sendEmail = () => {
      if (!captchaVerified.value) {
        alert("Veuillez valider le reCAPTCHA.");
        return;
      }
      const serviceID = "service_ogako3q";
      const templateID = "template_4cz7545";
      const userID = "-D87GITW0bleKDqC0";
      if (!form.value.name || !form.value.email || !form.value.message) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }
      emailjs.send(serviceID, templateID, form.value, userID)
        .then(() => alert("Email envoyé avec succès !"))
        .catch((error) => {
          alert("Erreur lors de l'envoi de l'email. Veuillez réessayer.");
          console.error(error);
        });
    };

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );
      document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    });

    return { form, captchaVerified, onCaptchaVerified, onCaptchaExpired, sendEmail };
  },
};
</script>

<style scoped>
/* Animation */
h1 {
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.form-container {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

form {
  max-width: 850px;
  width: 80%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #014961;
  box-shadow: 4px 8px 15px 1px #919191;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
}

form label {
  margin-bottom: 0.5em;
  color: #c48c00;
  display: flex;
  font-size: 18px;
}

form input,
form textarea {
  border: 1px solid #cccccc;
  padding: 0.8em;
  font-size: 16px;
  width: 80%;
  border-radius: 5px;
  margin: auto;
}

form textarea {
  resize: vertical;
  min-height: 120px;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

form button {
  background-color: #c48c00;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 12px 20px;
  width: 300px;
  border-radius: 5px;
  text-align: center;
}

form button:hover {
  background-color: #c4c4c4;
  color: #c48c00;
}

.recaptcha {
  margin-bottom: 15px;
}

@media screen and (max-width: 1024px) {
  form {
    max-width: 700px;
    width: 80%;
  }

  form input,
  form textarea {
    width: 85%;
  }
}

@media screen and (max-width: 768px) {
  form {
    max-width: 550px;
    width: 85%;
  }

  form input,
  form textarea {
    width: 90%;
  }

  form button {
    width: 250px;
  }
}

@media screen and (max-width: 480px) {
  form {
    max-width: 400px;
    width: 100%;
    margin: 20px auto;
  }

  form input,
  form textarea {
    width: 95%;
  }

  form button {
    width: 100%;
    max-width: 250px;
  }
}
</style>
