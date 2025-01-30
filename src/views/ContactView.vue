<template>
  <h1>Formulaire de contact</h1>
  <div>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="phone">Téléphone :</label>
        <input type="text" id="phone" v-model="form.phone" />
      </div>
      <div>
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

      <button type="submit" :disabled="!captchaVerified">Envoyer</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import VueRecaptcha from 'vue-recaptcha-v3';

export default {
  components: { VueRecaptcha },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      captchaVerified: false, // Indicateur reCAPTCHA validé
    };
  },
  methods: {
    onCaptchaVerified(response) {
      console.log("reCAPTCHA validé :", response);
      this.captchaVerified = true;
    },
    onCaptchaExpired() {
      console.log("reCAPTCHA expiré !");
      this.captchaVerified = false;
    },
    sendEmail() {
      if (!this.captchaVerified) {
        alert("Veuillez valider le reCAPTCHA.");
        return;
      }

      const serviceID = 'service_ogako3q';
      const templateID = 'template_4cz7545';
      const userID = '-D87GITW0bleKDqC0';

      if (!this.form.name || !this.form.email || !this.form.message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }

      emailjs
        .send(serviceID, templateID, this.form, userID)
        .then(() => {
          alert('Email envoyé avec succès !');
        })
        .catch((error) => {
          alert('Erreur lors de l\'envoi de l\'email. Veuillez réessayer.');
          console.error(error);
        });
    },
  },
};
</script>

<style>
/* Ajouté sans modification de votre style */
form {
  max-width: 850px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color:#014961;
  padding: 80px 50px;
  margin: auto;
}
form div {
  margin-bottom: 1em;
}
form label {
  margin-bottom: .5em;
  color: #c48c00;
  display: block;
}
form input {
  background-color:#E4E7E7;
  display:flex;
  align-items:center;
  justify-content:center;
}
form input, form textarea, form button {
  border: 1px solid #cccccc;
  padding: .5em;
  font-size: 1em;
  width: 100%;
  border-radius: 5px;
}
form button {
  background-color: #c48c00;
  color: white;
  border: none;
  cursor: pointer;
}
form button:hover {
  background-color: #026c9e;
}
.recaptcha {
  margin-bottom: 15px;
}
</style>
