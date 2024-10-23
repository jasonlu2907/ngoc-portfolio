interface NavButtonProps {
  activeSection: string;
  title: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  activeSection,
  title,
  onClick,
}: {
  activeSection: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <a
      href={'#' + activeSection}
      className={`hover:text-purple-custom ${
        activeSection === title ? 'text-purple-custom' : ''
      }`}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

export default NavButton;
