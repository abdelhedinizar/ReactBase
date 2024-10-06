import "./Accompaniments.css";
export default function Accompaniments({
  accompaniments,
  selectedAccom,
  setSelectedAccom,
}) {
  let accompanimentsTitles = accompaniments.map(
    (accomp) => accomp.AccompanimentsTitle
  );
  return (
    <div className="accompaniments">
      {accompanimentsTitles?.length > 0 &&
        [...new Set(accompanimentsTitles)].map((title, titleIndex) => {
          return (
            <div key={titleIndex}>
              <h3>{title}</h3>
              {accompaniments
                .filter((accomp) => accomp.AccompanimentsTitle === title)
                .map((accomp, accompIndex) => {
                  return (
                    <div className="accompaniment" key={accompIndex}>
                      {" "}
                      <label for={accomp.name}>{accomp.name}</label>
                      <div>
                        <label className="accompaniment-price">
                          {accomp.price}
                        </label>
                        <input
                          type="checkbox"
                          id={accomp._id}
                          name={accomp.name}
                          value={accomp.name}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedAccom([
                                ...selectedAccom,
                                {
                                  name: accomp.name,
                                  price: accomp.price,
                                  _id: accomp._id,
                                  quantity: 1,
                                },
                              ]);
                            } else {
                              setSelectedAccom(
                                selectedAccom.filter(
                                  (acc) => acc._id !== accomp._id
                                )
                              );
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}
