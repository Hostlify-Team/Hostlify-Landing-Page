<script>
export default {
  name: "PageHome",
  data() {
    return {
      showMenu: true,customPlanQuantity:1,
    };
  },
  methods: {
    scrollToSection(section) {
      this.$refs[section + "Section"].scrollIntoView({ behavior: "smooth" });
    },
    redirectToLink() {
      window.open("https://hostlifype.netlify.app/", "_blank");
    },
  },
};
</script>

<template>
  <header class="top-header">
    <img src="/src/assets/images/Logo.png" height="40" alt="Logo Hostlify" />
    <nav class="navMain">
      <i class="pi pi-bars navMain-menu" @click="showMenu = !showMenu"></i>
      <ul :class="`${showMenu ? 'navMain-mobile' : ''}`">
        <Button @click="scrollToSection('main')" class="p-button-text"
          >Home</Button
        >
        <Button @click="scrollToSection('about-us')" class="p-button-text"
          >About Us</Button
        >
        <Button @click="scrollToSection('services')" class="p-button-text"
          >Services</Button
        >
        <Button @click="scrollToSection('plans')" class="p-button-text"
          >Plans</Button
        >
        <Button @click="scrollToSection('our-team')" class="p-button-text"
          >Our Team</Button
        >
        <Button @click="scrollToSection('contact')" class="p-button-text"
          >Contact</Button
        >
      </ul>
    </nav>
  </header>

  <div class="layout">
    <div class="main" ref="mainSection">
      <img
        class="mainBackground"
        src="/src/assets/images/fondo-principal.jpg"
        alt="Logo principal Hostlify"
      />
      <div>
        <h1>
          THE BEST OPTION AS A HOTEL <br />
          MANAGER PLATFORM
        </h1>
        <Button
          @click="redirectToLink"
          label="Try it now"
          class="p-button-raised p-button-rounded"
        />
      </div>
    </div>

    <div class="about-us" ref="about-usSection">
      <h1>About Us</h1>
      <div>
        <img src="/src/assets/images/Logo.png" alt="Logo Hostlify" />
        <p>
          Hostlify is a web application for hotel management that has 2 users
          called "Manager" and "Hotel guest".<br />
          The "Manager" will have an interface where you can manage the
          different rooms, you can see the status of the room and even send
          services to the room.<br />
          The "Hotel guest" will have an interface where you can request room
          services, obtain information on the recreational areas and reserve
          spaces in the hotel.
        </p>
      </div>
    </div>

    <div class="services" ref="servicesSection">
      <h1>Services</h1>
      <div class="container-SV">
        <div class="services-Container">
          <img src="/src/assets/images/carne.png" alt="Food Service" />
          <div>
            <h1>Food Services</h1>
            <p>
              Enter information you want to share with your guests about the
              food hall, as well as table reservation options and/or room
              service with personalized dishes.
            </p>
          </div>
        </div>
        <div class="services-Container">
          <img src="/src/assets/images/bed.png" alt="Food Service" />
          <div>
            <h1>Room maintenance</h1>
            <p>
              Connect the room maintenance service with your guests to simplify
              their demands
            </p>
          </div>
        </div>
        <div class="services-Container">
          <img src="/src/assets/images/gimnasio.png" alt="Food Service" />
          <div>
            <h1>Recreation area</h1>
            <p>
              Provide your guest with exact information on the recreational
              areas in the hotel, in this way your guest can plan their
              activities and even make reservations for their favorite
              recreational areas
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="plans" ref="plansSection">
      <h1>Plans</h1>
      <div class="container-PL">
        <div class="plans-Container">
          <div class="orange-box1" />
          <div class="content-box">
            <h1>Standar</h1>
            <h2>30 rooms</h2>
            <h3>150 S/ mo*</h3>
            <Button
              @click="redirectToLink"
              label="Subscribe"
              class="p-button-raised"
            />
          </div>
        </div>
        <div class="plans-Container">
          <div class="orange-box2" />
          <div class="content-box">
            <h1>Pro</h1>
            <h2>50 rooms</h2>
            <h3>250 S/ mo*</h3>
            <Button
              @click="redirectToLink"
              label="Subscribe"
              class="p-button-raised"
            />
          </div>
        </div>
        <div class="plans-Container">
          <div class="orange-box3" />
          <div class="content-box">
            <h1>Premium</h1>
            <h2>Unlimited</h2>
            <h3>400 S/ mo*</h3>
            <Button
              @click="redirectToLink"
              label="Subscribe"
              class="p-button-raised"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="priceCalculator">
      <div class="container-PC" >
        <div class="priceCalculator-Container">
          <div class="orange-box" />
          <div class="content-box-container" >
            <div class="content-box-PC">
              <h1>Custom plan</h1>
              <h2>How many rooms do you have?</h2>
                <InputText type="number" style="background-color: white; color: black;width: 80px" v-model="customPlanQuantity" min="1"/>

            </div>
            <div class="content-box-PC2">
              <h1>Prices from S/6.50 per room</h1>
              <h2>Plans to satisfy each stage of your hotel</h2>
              <h3 style="font-weight: bold; font-size: 3rem; " >S/{{ customPlanQuantity*6.50 }}</h3>
              <Button
                @click="redirectToLink"
                label="Subscribe"
                class="p-button-raised"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="OurTeam" ref="our-teamSection">
    <h1>OurTeam</h1>
    <div class="container-OT">
      <div class="ourTeam-Container">
        <img src="/src/assets/images/christian.png" />
        <div class="content-box-OT">
          <h1>Christian Zeta</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="/src/assets/images/Diego.png" />
        <div class="content-box-OT">
          <h1>Diego Talledo</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="/src/assets/images/franchesco.jpg" />
        <div class="content-box-OT">
          <h1>Franchesco Soto</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="/src/assets/images/JoseA.jpg" />
        <div class="content-box-OT">
          <h1>José Cayllahua </h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="/src/assets/images/JoseC.jpg" />
        <div class="content-box-OT">
          <h1>Jose Mayurí</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <!--div class="ourTeam-Container">
        <img src="/src/assets/images/Alfredo.png" />
        <div class="content-box-OT">
          <h1>Alfredo Farro</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div-->
    </div>
  </div>

  <div class="contact" ref="contactSection">
    <h1>Contact</h1>
    <div class="container-C">
      <div class="contact-Container">
        <div class="contact-box-container">
          <div class="content-box-C">
            <span class="p-float-label">
              <InputText
                class="inputC"
                style="background-color: #121212"
                id="username"
                type="text"
                v-model="value"
              />
              <label for="username">Your name</label>
            </span>
            <span class="p-float-label">
              <InputText class="inputC" type="text" v-model="value" />
              <label for="username">Email</label>
            </span>
            <span class="p-float-label">
              <Textarea
                id="value"
                class="inputC-email"
                type="text"
                v-model="value"
              />
              <label for="value">Description</label>
            </span>
            <Button label="Send" class="p-button-raised" />
          </div>
          <div class="content-box-C2">
            <h1>Follow Us</h1>
            <h2>In</h2>
            <div></div>
            <div class="buttons-container">
              <Button icon="pi pi-facebook" type="button" />
              <Button icon="pi pi-instagram" type="button" />
              <Button icon="pi pi-twitter" type="button" />
              <Button icon="pi pi-youtube" type="button" />
              <Button icon="pi pi-linkedin" type="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer-container">
    <nav class="navMain-footer">
      <ul>
        <Button label="Consent to data processing" class="p-button-text" />
        <Button label="Support" class="p-button-text" />
        <Button label="Privacy Policy" class="p-button-text" />
      </ul>
    </nav>
    <p>©Hostly 2022 | All Rights Reserved.</p>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

h1 {
  font-family: "Roboto", sans-serif;
}
h2,
h3 {
  font-family: "Roboto", sans-serif;
}
p {
  font-family: "Roboto", sans-serif;
}
Button {
  font-family: "Roboto", sans-serif;
}

.top-header {
  width: 100%;
  display: flex;
  align-items: center;
  background: #1e1e1e;
  height: 80px;
    padding-right: 3rem;
}
.top-header img {
  margin-left: 3%;
}
.navMain {
  margin-left: auto;
}
.navMain ul Button {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;
}

.main {
  display: flex;
  position: relative;
}
.mainBackground {
  width: 100%;
  height: 554px;
}
.main div {
  display: flex;
  position: absolute;
  margin-left: 5%;
  margin-top: 10%;
  size: auto;
  flex-direction: column;
  justify-content: center;
}
.main div h1 {
  font-size: 52px;
  text-shadow: 3px 3px black;
}
.main div Button {
  width: 35%;
  margin: auto;
  font-size: 24px;
  padding-top: 1%;
  padding-bottom: 1%;
}

.about-us {
  background: #1e1e1e;
  text-align: center;
  padding: 3%;
}
.about-us h1 {
  margin: 0;
  font-size: 50px;
  color: #d6a049;
}
.about-us div {
  display: flex;
  justify-content: space-around;
}
.about-us div img {
    height: 300px;
}
.about-us div p {
  flex: 70%;
  margin: auto 5% auto 5%;
  font-size: 23px;
  text-align: left;
  padding: 3%;
}

.services {
  background: #1e1e1e;
  text-align: center;
  padding: 3%;
}
.services h1 {
  margin: 0 0 2% 0;
  font-size: 50px;
  color: #d6a049;
}
.container-SV {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
  flex-wrap: wrap;
}
.services-Container {
  background: white;
  width: 400px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
.services-Container img {
  border-radius: 25px 25px 0px 0px;
  margin: 0;
}
.services-Container div {
  margin: 1% 10% 15% 10%;
  color: #1e1e1e;
}
.services-Container div h1 {
  font-size: 24px;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.services-Container div p {
  font-size: 16px;
  text-align: justify;
  margin-bottom: 10%;
  color: #1e1e1e;
}
.services-Container div Button {
  width: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 18px;
  color: white;
}

.plans {
  background: #1e1e1e;
  text-align: center;
  padding: 3%;
}
.plans h1 {
  margin: 0 0 2% 0;
  font-size: 50px;
  color: #d6a049;
}
.container-PL {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
  flex-wrap: wrap;
}
.plans-Container {
  background: white;
  width: 300px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
}
.orange-box1 {
  border-radius: 25px 25px 0px 0px;
  background: #ffc286;
  width: 100%;
  height: 50px;
  margin: 0;
}
.orange-box2 {
  border-radius: 25px 25px 0px 0px;
  background: #ea9d51;
  width: 100%;
  height: 50px;
  margin: 0;
}
.orange-box3 {
  border-radius: 25px 25px 0px 0px;
  background: #f1c94e;
  width: 100%;
  height: 50px;
  margin: 0;
}
.content-box {
  margin: 1% 10% 15% 10%;
  color: #1e1e1e;
}
.content-box h1 {
  font-size: 24px;
  text-align: left;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box h2 {
  font-size: 16px;
  text-align: left;
  margin-bottom: 10%;
  color: #1e1e1e;
}
.content-box h3 {
  font-size: 22px;
  text-align: left;
  margin-bottom: 10%;
  color: #1e1e1e;
}
.content-box Button {
  width: 50%;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-right: 80%;
  font-size: 18px;
  color: white;
}

.priceCalculator {
  background: #1e1e1e;
    padding: 5% 15%;
}
.container-PC {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.priceCalculator-Container {
  width: 100%;
  height: 300px;
  border-radius: 30px;
  display: inline-block;
  flex-direction: column;
  flex-wrap: wrap;
}
.orange-box {
  border-radius: 25px 25px 0px 0px;
  background: #d6a049;
  width: 100%;
  height: 50px;
  margin: 0;
}
.content-box-container {
  background: white;
  width: 100%;
  height: 300px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: row;
}
.content-box-PC {
  margin: 1% 10% 15% 10%;
  color: #1e1e1e;
  flex: 50%;
  display: flex;
  flex-direction: column;
}
.content-box-PC h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box-PC h2 {
  font-size: 20px;
  font-weight: lighter;
  text-align: left;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box-PC h3 {
  font-size: 48px;
  text-align: center;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box-PC2 {
  margin: 1% 10% 15% 10%;
  color: #1e1e1e;
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-box-PC2 h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box-PC2 h2 {
  font-size: 18px;
  font-weight: lighter;
  text-align: center;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box-PC2 h3 {
  font-size: 48px;
  text-align: center;
  margin: 5% 0 5% 0;
  color: #1e1e1e;
}
.content-box-PC2 Button {
  width: 50%;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 18px;
  color: white;
}

.OurTeam {
  background: #1e1e1e;
  text-align: center;
  padding: 3%;
}
.OurTeam h1 {
  margin: 0 0 2% 0;
  font-size: 50px;
  color: #d6a049;
}
.container-OT {
  display: grid;
  justify-content: center;
  gap: 100px;
  padding: 0px 200px 0px 200px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.ourTeam-Container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ourTeam-Container img {
  border-radius: 50%;
  width: 50%;
}
.content-box-OT h1 {
  justify-content: center;
  color: white;
  font-size: 24px;
}
.content-box-OT h2 {
  justify-content: center;
  color: white;
  font-size: 16px;
}

.contact {
  background: #1e1e1e;
  padding: 3%;
  font-family: "Roboto", sans-serif;
}
.contact h1 {
  color: #d6a049;
  text-align: center;
    margin: 0 0 2% 0;
    font-size: 50px;
    color: #d6a049;
}
.container-C {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.contact-Container {
  width: 100%;
  height: 500px;
  border-radius: 30px;
  display: inline-block;
  flex-direction: column;
  flex-wrap: wrap;
}
.contact-box-container {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  border: 6px solid #d6a049;
  display: flex;
  flex-direction: row;
}
.content-box-C {
  margin: 1% 10% 15% 10%;
  color: #1e1e1e;
  flex: 50%;
  display: flex;
  flex-direction: column;
}
.p-float-label {
  margin-top: 7%;
}
.inputC {
  width: 100%;
}
.inputC-email {
  width: 100%;
  height: 150px;
  background-color: #1e1e1e;
}
.content-box-C button {
  margin: 5% 0% 0% 25%;
  width: 50%;
  padding: 4% 0 4% 0;
}
.content-box-C2 {
  margin: 1% 10% 15% 10%;
  color: #1e1e1e;
  flex: 50%;
  display: flex;
  flex-direction: column;
}
.content-box-C2 h1 {
  text-align: center;
  color: #d6a049;
}
.content-box-C2 h2 {
  text-align: center;
  color: #d6a049;
}
.buttons-container {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  padding: 0px 30px 40px 10px;
}
.buttons-container Button {
  display: flex;
  justify-content: center;
}

.footer-container {
  background: #1e1e1e;
}
.footer-container p {
  text-align: center;
  color: #d6a049;
}
.navMain-footer {
  display: flex;
  justify-content: center;
}

.navMain-menu {
  display: none !important;
}

@media screen and (max-width: 600px) {
  .navMain-mobile {
    display: none !important;
  }

  .navMain-menu {
    display: block !important;
  }
  .top-header {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  .navMain {
    margin: 0;
    text-align: center;
  }

  .navMain ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .main div h1 {
    font-size: 60px;
  }

  .services-Container {
    width: 100%;
  }

  .priceCalculator-Container {
    height: auto;
  }

  .content-box-container {
    height: auto;
    flex-direction: column;
  }

  .container-OT {
    padding: 10px;
  }

  .contact-Container {
    height: auto;
  }

  .contact-box-container {
    flex-direction: column;
    height: auto;
  }

  .buttons-container {
    margin-top: 0;
    padding: 0;
    grid-template-columns: auto;
  }

  .content-box Button {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: auto;
  }
}
</style>
