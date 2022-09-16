<script>
</script>

<template>
  <header class="top-header">
    <img src="src/assets/images/Logo.png" height=130 alt="Logo Hostlify" />
    <nav class="navMain">
      <ul>
        <Button label="Home" class="p-button-text"/>
        <Button label="About Us" class="p-button-text"/>
        <Button label="Services" class="p-button-text"/>
        <Button label="Plans" class="p-button-text"/>
        <Button label="Our Team" class="p-button-text"/>
        <Button label="Contact" class="p-button-text"/>
      </ul>
    </nav>
  </header>

  <div class="layout">
    <!--2 main-->
    
    <div class="main">
     <img class="mainBackground" src="src/assets/images/fondo-principal.jpeg" alt="Logo principal Hostlify" />
      <div>
       <h1>The best option as a hotel <br/> manager platflorm</h1>
       <Button label="Try it now" class="p-button-raised p-button-rounded"/>
      </div>
    </div>
    <!--3 about us-->
    
    <div class="about-us">
      <h1>About Us</h1>
      <div>
        <Image src="src/assets/images/Logo.png" alt="Logo Hostlify" />
        <p>
          Hostlify is a web application for hotel management that has 2 users called "Manager" and "Hotel guest".<br/>
          The "Manager" will have an interface where you can manage the different rooms, you can see the status of the room and even send services to the room.<br/>
          The "Hotel guest" will have an interface where you can request room services, obtain information on the recreational areas and reserve spaces in the hotel.
        </p>
      </div>
    </div>

    <!--4 services-->

    <div class="services">
      <h1>Services</h1>
      <div class="container-SV">
        <div class="services-Container">
          <img src="src/assets/images/carne.png" alt="Food Service" />
          <div>
            <h1>Food Services</h1>
            <p>Enter information you want to share with your guests about the food hall, as well as table reservation options and/or room service with personalized dishes.</p>
            <Button label="Read More" class="p-button-raised"/>
          </div>
        </div>
        <div class="services-Container">
          <img src="src/assets/images/bed.png" alt="Food Service" />
          <div>
            <h1>Room maintenance</h1>
            <p>Connect the room maintenance service with your guests to simplify their demands</p>
            <Button label="Read More" class="p-button-raised"/>
          </div>
        </div>
        <div class="services-Container">
          <img src="src/assets/images/gimnasio.png" alt="Food Service" />
          <div>
            <h1>Recreation area</h1>
            <p>Provide your guest with exact information on the recreational areas in the hotel, in this way your guest can plan their activities and even make reservations for their favorite recreational areas</p>
            <Button label="Read More" class="p-button-raised"/>
          </div>
        </div>
      </div>
    </div>
    
    <div class="plans">
      <h1>Plans</h1>
      <div class="container-PL">
        <div class="plans-Container">
          <div class="orange-box1"/>
          <div class="content-box">
            <h1>Standar</h1>
            <h2>30 rooms</h2>
            <h3>150 S/ mo*</h3>
            <Button label="Subscribe" class="p-button-raised"/>
          </div>
        </div>
        <div class="plans-Container">
          <div class="orange-box2"/>
          <div class="content-box">
            <h1>Pro</h1>
            <h2>50 rooms</h2>
            <h3>250 S/ mo*</h3>
            <Button label="Subscribe" class="p-button-raised"/>
          </div>
        </div>
        <div class="plans-Container">
          <div class="orange-box3"/>
          <div class="content-box">
            <h1>Premium</h1>
            <h2>Unlimited</h2>
            <h3>400 S/ mo*</h3>
            <Button label="Subscribe" class="p-button-raised"/>
          </div>
        </div>
      </div>
    </div>

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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

h1{
  font-family: 'Roboto', sans-serif;
}
h2, h3{
  font-family: 'Roboto', sans-serif;
}
p{
  font-family: 'Roboto', sans-serif;
}
Button{
  font-family: 'Roboto', sans-serif;
}

.top-header{
  width: 100%;
  display: flex;
  align-items: center;
  background: #011530;
  height: 130px;
}
.top-header img{
  margin-left: 3%;
}
.navMain{
  margin-left: auto;
}
.navMain ul Button{
  margin-left: 20px;
  margin-right: 50px;
  font-size: 22px;
}

</style>
