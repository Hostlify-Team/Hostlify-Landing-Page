<script>
</script>

<template>
  <!--1 top header-->

  <div class="layout">
    <!--2 main-->

    <!--3 about us-->

    <!--4 services-->

    <!--5 plans-->

    <div class="priceCalculator">
      <div class="container-PC">
        <div class="priceCalculator-Container">
          <div class="orange-box"/>
          <div class="content-box-container">
            <div class="content-box-PC">
              <h1>Custom plan</h1>
              <h2>How many rooms do you have?</h2>
              <h3>15</h3>
            </div>
            <div class="content-box-PC2">
              <h1>Prices from S/6.50 per room</h1>
              <h2>Plans to satisfy each stage of your hotel</h2>
              <h3>S/97.50</h3>
              <Button label="Subscribe" class="p-button-raised"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="OurTeam">
    <h1>OurTeam</h1>
    <div class="container-OT">
      <div class="ourTeam-Container">
        <img src="src/assets/images/Rubio.png">
        <div class="content-box-OT">
          <h1>Adrian Rubio</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="src/assets/images/Diego.png">
        <div class="content-box-OT">
          <h1>Diego Talledo</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="src/assets/images/Andres.png">
        <div class="content-box-OT">
          <h1>Andres Reynoso</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="src/assets/images/Josef.png">
        <div class="content-box-OT">
          <h1>Josef Romero</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="src/assets/images/Fiorella.png">
        <div class="content-box-OT">
          <h1>Fiorella Valencia</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
      <div class="ourTeam-Container">
        <img src="src/assets/images/Alfredo.png">
        <div class="content-box-OT">
          <h1>Alfredo Farro</h1>
          <h2>Software Engineering Student</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="contact">
    <h1>Contact</h1>
    <div class="container-C">
      <div class="contact-Container">
        <div class="contact-box-container">
          <div class="content-box-C">
              <span class="p-float-label">
	              <InputText class="inputC" id="username" type="text" v-model="value" />
                <label for="username">Your name</label>
              </span>
            <span class="p-float-label">
	              <InputText class="inputC" id="username" type="text" v-model="value" />
                <label for="username">Email</label>
              </span>
            <span class="p-float-label">
	              <InputText class="inputC-email" id="username" type="text" v-model="value" />
                <label for="username">Message</label>
              </span>
            <Button label="Send" class="p-button-raised"/>
          </div>
          <div class="content-box-C2">
            <h1>Follow Us</h1>
            <h2>In</h2>
            <div >

            </div>
            <div class="buttons-container">
              <Button type="button" class="p-button-outlined p-button-success">
                <img alt="logo" src="src/assets/images/facebook.PNG" />
              </Button>
              <Button type="button" class="p-button-outlined p-button-success">
                <img alt="logo" src="src/assets/images/linkedin.PNG" />
              </Button>
              <Button type="button" class="p-button-outlined p-button-success">
                <img alt="logo" src="src/assets/images/twitter.PNG" />
              </Button>
              <Button type="button" class="p-button-outlined p-button-success">
                <img alt="logo" src="src/assets/images/google.PNG" />
              </Button>
              <Button type="button" class="p-button-outlined p-button-success">
                <img alt="logo" src="src/assets/images/instagram.PNG" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer-container">
    <nav class="navMain-footer">
      <ul>
        <Button label="Consent to data processing" class="p-button-text"/>
        <Button label="Support" class="p-button-text"/>
        <Button label="Privacy Policy" class="p-button-text"/>
      </ul>
    </nav>
    <p>©Hostly  2022 |  All Rights Reserved.</p>
  </footer>




</template>

<style>

</style>
