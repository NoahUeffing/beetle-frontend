import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";

const useFetchDosageForm = (dosageFormId) => {
  const [dosageForm, setDosageForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/dosage-form/${dosageFormId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setDosageForm(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [dosageFormId]);

  return { dosageForm, loading, error };
};

export default useFetchDosageForm;