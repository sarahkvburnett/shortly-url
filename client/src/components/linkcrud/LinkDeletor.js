import React, { useState } from "react";
import { LinkModal, PrimaryButton } from "../Styles";
import axios from "axios";
import { shortlyUrl } from "../../utilities/urls";
import Error from "../Error";
import CloseButton from "./CloseButton";
import { useLinks } from "../../hooks/useLinks";
import { useProcessLink } from "../../hooks/useProcessLink";
import { useFlash } from '../../hooks/useFlash';

const LinkDeletor = () => {
  const { deleteLinkFromLinks } = useLinks();
  const {
    processLink: {
      link,
      link: { _id, full, short },
    },
    setProcessNull,
  } = useProcessLink();
  const { showFlash } = useFlash();
  const [error, setError] = useState();
  const updateState = () => {
    deleteLinkFromLinks({ link });
    showFlash('Link deleted');
    setProcessNull();
  };
  const deleteLink = (event) => {
    event.preventDefault();
    axios
      .delete(`/api/links/${_id}`)
      .then((res) => updateState())
      .catch((err) => setError("Delete failed, please try again"));
  };

  return (
    <LinkModal onSubmit={(event) => deleteLink(event)}>
      <h3>Delete Shortly Link</h3>
      <p>{full}</p>
      <p>{shortlyUrl + short}</p>
      {error && <Error error={error} />}
      <PrimaryButton id="delete">Delete</PrimaryButton>
      <CloseButton />
    </LinkModal>
  );
};

export default LinkDeletor;
