import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import css from "./SearchBox.module.css";

import { selectNameFilter } from "../../redux/filters/selectors";
import { initialStateFilter } from "../../redux/filters/constants";
import { changeFilter } from "../../redux/filters/filtersSlice";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleInputSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const cleanInput = () => {
    dispatch(changeFilter(initialStateFilter.name));
  };

  return (
    <div data-aos="zoom-in" className={css.container}>
      <p className={css.inputText}>Find contacts</p>
      <div className={css.thumbInput}>
        <input
          className={css.formInput}
          type="text"
          value={searchValue}
          onChange={handleInputSearch}
        />
        <IoCloseOutline
          className={css.iconClean}
          size="20"
          onClick={cleanInput}
        />
      </div>
    </div>
  );
};

export default SearchBox;
