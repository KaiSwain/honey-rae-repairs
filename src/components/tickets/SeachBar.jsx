export const SearchBar = ({setShowEmergencyOnly , setSearchTerm}) => {
  return (
    <div className="filter-bar">
      <div className="buttons">
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowEmergencyOnly(true); //on click set show emergency to true
          }}
        >
          Emergency
        </button>
        <button
          className="filter-btn btn-info"
          onClick={() => {
            setShowEmergencyOnly(false);
          }}
        >
          show all
        </button>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value); //on change set searchTerm state to search bar value
          }}
          type="text"
          placeholder="Search Tickets"
          className="ticket-search"
        />
      </div>
    </div>
  );
};
