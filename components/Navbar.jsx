const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between max-w-screen p-6 sm:text-3xl text:lg">
      <div>
        <p>@miyurua</p>
      </div>
      <div className="flex flex-row gap-6">
        <p>Work</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
