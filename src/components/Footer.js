function Footer() {
  const hour = new Date().getHours();
  const isClosed = hour > 22 || hour < 11 || (hour > 14 && hour < 12);
  if (isClosed) {
    //alert("Sorry we are closed now !");
    return (
      <footer>
        {new Date().toLocaleTimeString()} We're Currently closed !
      </footer>
    );
  }
  return (
    <footer>{new Date().toLocaleTimeString()} We're Currently Open !</footer>
  );
}

export default Footer;