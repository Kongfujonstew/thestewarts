export default `#root {
  position: relative; }

.box-shadow {
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }

#root > div:not(#background-container) {
  height: 100vh;
  padding: 0 24px;
  padding-top: 5vh;
  width: 100%; }
  #root > div:not(#background-container) > div {
    margin: auto;
    width: 100%;
    height: 60vh; }
    @media (min-width: 768px) {
      #root > div:not(#background-container) > div {
        max-width: 720px; } }

.nav-button {
  height: 80px !important;
  width: 80px !important;
  margin-top: 3vh !important;
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

.menu-buttons, .menu-buttons-1, .menu-buttons-2 {
  display: flex;
  position: absolute;
  height: 40px !important;
  width: unset !important;
  cursor: pointer; }
  .menu-buttons button, .menu-buttons-1 button, .menu-buttons-2 button {
    color: #0a3b9d;
    width: 100px; }
  @media (min-width: 768px) {
    .menu-buttons, .menu-buttons-1, .menu-buttons-2 {
      height: 60px !important; }
      .menu-buttons button, .menu-buttons-1 button, .menu-buttons-2 button {
        color: #0a3b9d;
        width: 120px; } }

.menu-buttons-1 {
  width: unset;
  top: 0;
  right: 0;
  padding-top: 2px !important;
  padding-right: 2px !important; }

.menu-buttons-2 {
  height: 80px !important;
  margin-bottom: 90px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); }

#background-container {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1000;
  opacity: .7;
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
    margin-bottom: 24px; }
  #welcome h4 {
    margin-top: 0; }
  #welcome p {
    margin-top: 0; }
  #welcome button {
    width: 80px;
    border-radius: 0;
    background: #e7e6e4; }
  #welcome #skyline {
    margin-left: 1px;
    width: calc(100% - 1px);
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -100; }

#rsvp-container {
  background: #7088ba;
  background: radial-gradient(circle, #7088ba 38%, #0a3b9d 96%); }

#about-container {
  background-image: repeating-linear-gradient(45deg, #eee 10px, #eee 12px, transparent 12px, transparent 20px);
  background-color: white; }

#footer {
  background: transparent;
  position: relative; }
  #footer img {
    background: #7088ba;
    width: 250px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 125px);
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 50%; }

span {
  font-family: MrsEavesRoman; }

p {
  font-family: MrsEavesItalic; }

h1 {
  margin-top: 1vh;
  margin-bottom: 0;
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
  font-size: 18px; }

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