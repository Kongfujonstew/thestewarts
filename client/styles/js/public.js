export default `.box-shadow {
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }

#root > div:not(#background-container) {
  height: 812px;
  padding: 0 16px;
  padding-top: 150px; }
  #root > div:not(#background-container) > div {
    background: white;
    margin: auto;
    width: 100%; }
    @media (min-width: 768px) {
      #root > div:not(#background-container) > div {
        max-width: 720px; } }

#background-container {
  height: 1500px;
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

#welcome {
  height: 500px;
  position: relative;
  border: 4px solid #c19a6b; }
  #welcome #skyline {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0; }

@keyframes fadeIn {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

#fade-in {
  opacity: 0;
  animation: 2s ease-out 1s 1 fadeIn;
  animation-fill-mode: forwards; }

`;