function FormationSection({ mobileLayout, desktopLayout }) {
  return (
    <>
      {/* Mobile / Tablet View */}
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        {mobileLayout}
      </div>

      {/* Desktop / Large Screens View */}
      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        {desktopLayout}
      </div>
    </>
  );
}

export default FormationSection;
