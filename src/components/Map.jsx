function Map() {
  return (
    <div className="flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14626.25209137367!2d74.14415351561178!3d23.584132693747456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396726c144fd44d1%3A0x2d75bd3317409a47!2sGarhi%2C%20Rajasthan%20327022!5e0!3m2!1sen!2sin!4v1707124529590!5m2!1sen!2sin"
        width="100%"
        height="440"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
