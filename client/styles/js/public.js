export default `#root {
  position: relative;
  overflow: hidden; }

button {
  text-transform: none !important;
  font-size: 18px !important;
  border-radius: 0 !important; }

label, input {
  text-transform: none !important;
  font-family: MrsEavesRoman !important; }

fieldset {
  border-radius: 0 !important; }

.box-shadow {
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }

#root > div:not(#background-container):not([class*="menu-buttons"]) {
  height: 100vh;
  padding: 0 24px;
  padding-top: 5vh;
  width: 100%;
  position: relative; }
  #root > div:not(#background-container):not([class*="menu-buttons"]) > div {
    margin: auto;
    width: 100%;
    height: 60vh; }
    @media (min-width: 768px) {
      #root > div:not(#background-container):not([class*="menu-buttons"]) > div {
        max-width: 720px; } }

.nav-button {
  height: 80px !important;
  width: 80px !important;
  position: absolute;
  left: calc(50% - 40px);
  bottom: 60px;
  border-radius: 50%;
  background: rgba(192, 192, 192, 0.2) !important;
  text-align: center;
  padding-top: 20px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer; }
  .nav-button svg {
    font-size: 48px;
    transform: rotate(90deg);
    color: #0a3b9d; }
  .nav-button:first-of-type {
    background: blue; }
  @media (min-width: 768px) {
    .nav-button {
      height: 60px !important;
      width: 60px !important;
      padding-top: 10px;
      left: calc(50% - 30px); } }

.menu-buttons, .menu-buttons-1, .menu-buttons-2 {
  display: flex;
  position: absolute;
  z-index: 100;
  height: 50px !important;
  width: unset !important;
  cursor: pointer; }
  .menu-buttons button, .menu-buttons-1 button, .menu-buttons-2 button {
    color: #0a3b9d;
    width: 95px;
    font-size: 18px !important; }
  @media (min-width: 768px) {
    .menu-buttons, .menu-buttons-1, .menu-buttons-2 {
      height: 60px !important; }
      .menu-buttons button, .menu-buttons-1 button, .menu-buttons-2 button {
        color: #0a3b9d;
        width: 120px;
        font-size: 24px !important; } }

.menu-buttons-1 {
  width: unset;
  top: 0;
  right: 0;
  padding-top: 2px !important;
  padding-right: 2px !important; }

.menu-buttons-2 {
  height: 80px !important;
  margin-bottom: 50px;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%); }

#background-container {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1000;
  opacity: .3;
  background-color: #ececec; }
  #background-container #background {
    height: 1500px;
    width: 100%;
    max-width: 2000px;
    margin: auto;
    background-position-x: center;
    background-position-y: -200px; }
    @media (min-width: 768px) {
      #background-container #background {
        background-position: right -700px top 0; } }

#tartan {
  position: absolute;
  width: 150px;
  top: -75px;
  left: -75px;
  transform: rotate(45deg);
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: -1; }
  @media (min-width: 768px) {
    #tartan {
      width: 300px;
      top: -150px;
      left: -150px; } }

#welcome {
  height: 500px;
  position: relative;
  max-width: 500px !important;
  background: white;
  background: linear-gradient(white 0%, white 22%, #e7e6e4 55%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  text-align: center;
  color: #726442; }
  #welcome h1 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 42px; }
    @media (min-width: 768px) {
      #welcome h1 {
        margin-top: 18px; } }
  #welcome h2 {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 42px; }
    @media (min-width: 768px) {
      #welcome h2 {
        font-size: 48px; } }
  #welcome h4 {
    margin-top: 0; }
  #welcome p {
    margin-top: 0; }
  #welcome span {
    margin-top: 0; }
  #welcome button {
    width: 80px;
    border-radius: 0;
    background: #e7e6e4;
    font-size: 22px !important; }
  #welcome #skyline {
    margin-left: 1px;
    width: calc(100% - 1px);
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -100; }

#about-container {
  background-image: repeating-linear-gradient(45deg, #eee 10px, #eee 12px, transparent 12px, transparent 20px);
  background-color: white; }
  #about-container #about {
    background: white;
    padding: 24px;
    max-width: 500px;
    position: relative;
    overflow: hidden;
    max-width: 500px !important; }
    #about-container #about .text {
      margin-left: 120px; }
    #about-container #about h2 {
      margin-top: 0;
      margin-bottom: 24px;
      font-size: 28px;
      text-align: center;
      color: #726442;
      white-space: nowrap; }
    #about-container #about p {
      font-size: 14px;
      font-family: MrsEavesRoman;
      position: relative;
      z-index: 100;
      mix-blend-mode: difference;
      color: white; }
    #about-container #about p:first-letter {
      font-family: 'Great Vibes', cursive;
      font-size: 22px; }
    #about-container #about #hermann {
      position: absolute;
      width: 150px;
      top: 100px;
      left: -24px; }
    @media (min-width: 768px) {
      #about-container #about .text {
        margin-left: 165px; }
      #about-container #about h2 {
        font-size: 36px;
        margin-bottom: 48px; }
      #about-container #about p {
        font-size: 1em; }
      #about-container #about p:first-letter {
        font-size: 28px; }
      #about-container #about #hermann {
        width: 200px; } }

#theplan-container {
  overflow: hidden; }
  #theplan-container #theplan {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    padding: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 430px;
    max-width: 500px !important; }
    #theplan-container #theplan h2 {
      color: #726442;
      font-size: 22px;
      margin-bottom: 0;
      z-index: 100; }
    #theplan-container #theplan h3 {
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 6px;
      z-index: 100; }
    #theplan-container #theplan span {
      margin: 0;
      font-size: 14px; }
    #theplan-container #theplan #logo, #theplan-container #theplan #car {
      position: absolute;
      top: 33vh;
      width: 120px;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }
    #theplan-container #theplan #logo {
      right: -30px;
      transform: rotate(10deg); }
    #theplan-container #theplan #car {
      left: -30px;
      transform: rotate(-10deg); }
    @media (min-width: 768px) {
      #theplan-container #theplan h2 {
        color: #726442;
        font-size: 34px;
        margin-bottom: 0;
        margin-top: 14px; }
      #theplan-container #theplan h3 {
        font-size: 28px;
        margin-top: 0;
        margin-bottom: 8px; }
      #theplan-container #theplan #logo {
        right: -40px; }
      #theplan-container #theplan #car {
        left: -30px; }
      #theplan-container #theplan #car, #theplan-container #theplan #logo {
        top: 34vh;
        width: 150px; } }

#location-container #location {
  display: flex;
  flex-direction: column;
  justify-content: space-around; }
  #location-container #location .text {
    text-align: center; }
    #location-container #location .text span {
      display: block; }
  #location-container #location iframe {
    border: 4px solid #726442 !important; }
  @media (min-width: 768px) {
    #location-container #location .text {
      margin-top: -20px; }
      #location-container #location .text span {
        font-size: 18px; } }

#faq-container #faq {
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 24px;
  padding-top: 4px;
  max-width: 500px !important; }
  #faq-container #faq h3 {
    margin-top: 12px;
    margin-bottom: 6px; }
  @media (min-width: 768px) {
    #faq-container #faq span {
      font-size: 18px; }
    #faq-container #faq h3 {
      margin-top: 18px;
      margin-bottom: 16px; } }

#rsvp-container {
  background: #b0d0ff;
  background: radial-gradient(circle, #b0d0ff 49%, #0a3b9d 68%); }
  #rsvp-container h1 {
    color: white; }
  #rsvp-container #rsvp {
    max-width: 500px !important;
    text-align: center; }
    #rsvp-container #rsvp div {
      font-size: 22px;
      font-family: MrsEavesRoman !important; }
    #rsvp-container #rsvp > span:not([label*="RSVP"]) {
      display: block !important;
      font-size: 22px; }
    #rsvp-container #rsvp > div {
      width: 100%;
      margin-bottom: 12px; }
    #rsvp-container #rsvp label, #rsvp-container #rsvp button, #rsvp-container #rsvp input {
      font-size: 22px !important;
      color: black; }
    #rsvp-container #rsvp #please {
      display: inline !important; }
    #rsvp-container #rsvp button {
      color: white;
      width: 100% !important;
      margin-bottom: 6px;
      z-index: 100; }
      #rsvp-container #rsvp button:disabled {
        color: grey; }
      #rsvp-container #rsvp button.short {
        width: 100px !important; }
    #rsvp-container #rsvp #short-button {
      width: 100px !important; }
    #rsvp-container #rsvp .buttons {
      padding-top: 24px;
      display: flex;
      justify-content: space-between; }
      #rsvp-container #rsvp .buttons > button {
        flex-basis: 47%; }
  @media (min-width: 768px) {
    #rsvp-container {
      background: radial-gradient(circle, #b0d0ff 28%, #0a3b9d 68%); } }

#footer {
  background: transparent;
  position: relative;
  max-width: 500px !important;
  padding: 24px;
  text-align: center; }
  #footer div {
    font-size: 22px;
    font-family: MrsEavesRoman !important;
    width: 240px;
    z-index: 100; }
  #footer label, #footer button, #footer input, #footer span {
    font-size: 22px !important; }
  #footer button {
    width: 100%;
    width: 240px;
    z-index: 100 !important; }
  #footer img {
    background: #0a3b9d;
    width: 180px;
    position: absolute;
    bottom: -36px;
    left: calc(50% - 90px);
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 50%; }
  @media (min-width: 768px) {
    #footer img {
      width: 250px;
      left: calc(50% - 125px);
      bottom: -18; }
    #footer div, #footer button {
      width: 100%; } }

span {
  font-family: MrsEavesRoman; }

p {
  font-family: MrsEavesItalic; }

h1 {
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-family: Enamel;
  font-size: 56px;
  text-align: center;
  text-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }
  @media (min-width: 768px) {
    h1 {
      margin-top: 3vh;
      margin-bottom: 5vh; } }

h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 36px; }

h3 {
  font-family: Enamel;
  font-size: 36px; }

h4 {
  font-family: Baskervville;
  font-size: 14px; }
  @media (min-width: 768px) {
    h4 {
      font-size: 18px; } }

@keyframes fadeIn {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

.fade-in, .nav-button:first-of-type {
  opacity: 0;
  animation: 2s ease-out 1s 1 fadeIn;
  animation-fill-mode: forwards; }

`;