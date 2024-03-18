import { AiOutlineClose } from "react-icons/ai";
import { TbMenuDeep } from "react-icons/tb";

interface Props {
  handleOnClick: () => void;
  showSideBar: boolean;
}

const MenuButton = ({ handleOnClick, showSideBar }: Props) => {
  return (
    <button type="button" onClick={handleOnClick} className="z-50">
      <i>
        {!showSideBar ? <TbMenuDeep size={40} /> : <AiOutlineClose size={40} />}
      </i>
    </button>
  );
};

export default MenuButton;
