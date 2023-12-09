const handleWhatsAppClick = (message) => {
  const phoneNumber = "+2349075868706";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export default handleWhatsAppClick;
