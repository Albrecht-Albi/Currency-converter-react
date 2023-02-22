import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const responseURL = "https://api.exchangerate.host/latest?base=PLN";
                const response = await fetch(responseURL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                return setRatesData({
                    state: "succes",
                    rates,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;

};