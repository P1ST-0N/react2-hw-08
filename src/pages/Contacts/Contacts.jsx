import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TitleDocument from "../../components/TitleDocument";
import ContactList from "../../components/ContactList/ContactList";
// import ContactForm
// import SearchBox
import style from "./Contacts.module.css";

import { fetchContacts } from "../../redux/contacts/contactsOps";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className={style.bgImgContacts}></div>
        <TitleDocument>Your contacts page</TitleDocument>
        <div className={style.positionSection}>
          {/* <ContactForm /> */}
          {/* <SearchBox /> */}
          <ContactList />
        </div>
      </section>
    </>
  );
};

export default Contacts;
