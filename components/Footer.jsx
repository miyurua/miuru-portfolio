const Footer = () => {
  return (
    <div className="flex flex-row justify-between min-w-6xl mx-auto gap-10 text-xs sm:text-lg p-6">
      <div className="flex flex-row  gap-2 text-green-800">
        <p>© 2024</p>
        <p>Miuru Abeysiriwardana</p>
        <p>• Colombo</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-green-800 text-semibold">Contact Me</p>
        <ul className="text-green-700 font-light text-sm gap-3 flex flex-col">
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
