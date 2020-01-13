export default `.box-shadow {
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }

#root > div:not(#background-container) {
  height: 100vh;
  padding: 0 24px;
  padding-top: 5vh; }
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
  background: rgba(255, 255, 255, 0.5) !important;
  text-align: center;
  padding-top: 20px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer; }
  .nav-button svg {
    font-size: 48px;
    transform: rotate(90deg);
    color: #0a3b9d; }

#background-container {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1000;
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
  width: 300px;
  transform: rotate(45deg);
  top: -150px;
  left: -150px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }

#welcome {
  height: 500px;
  position: relative;
  border: 4px solid #c19a6b;
  background: white;
  background: linear-gradient(white 0%, white 32%, #e7e6e4 50%); }
  #welcome #skyline {
    margin-left: 1px;
    width: calc(100% - 1px);
    position: absolute;
    left: 0;
    bottom: 0; }

#rsvp-container {
  background: #7088ba;
  background: radial-gradient(circle, #7088ba 38%, #0a3b9d 96%); }

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

h1 {
  margin-bottom: 5vh;
  margin-top: 3vh;
  font-family: Enamel;
  font-size: 56px;
  text-align: center;
  text-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }

@keyframes fadeIn {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

#welcome-container {
  opacity: 0;
  animation: 2s ease-out 1s 1 fadeIn;
  animation-fill-mode: forwards; }

`;