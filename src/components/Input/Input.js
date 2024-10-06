import './Input.css';
import marker from '../../map-marker.svg';

function Input({ locationText, handleSuggestion, handleLocationChange, handleGuestCount, guestCount, handleSubmit, toggle, handleToggle }) {

    return (
        <form>
            <div className="product-search">
                <div className="search-element">
                    <label htmlFor="location" className="search-label">Location</label>
                    <input id="location" className="search-input gray-text" type="text" autoComplete="on" name="location" value={locationText} onChange={handleLocationChange} />
                    <div className="location-suggestions">
                        <button type="button" name="Helsinki, Finland" onMouseDown={handleSuggestion} onClick={handleSuggestion}>
                            <img src={marker} alt="" />
                            Helsinki, Finland
                        </button>
                        <button type="button" name="Turku, Finland" onMouseDown={handleSuggestion}>
                            <img src={marker} alt="" />
                            Turku, Finland
                        </button>
                        <button type="button" name="Oulu, Finland" onMouseDown={handleSuggestion}>
                            <img src={marker} alt="" />
                            Oulu, Finland
                        </button>
                        <button type="button" name="Vaasa, Finland" onMouseDown={handleSuggestion}>
                            <img src={marker} alt="" />
                            Vaasa, Finland
                        </button>
                    </div>
                </div>
                <button className="search-element guests-button" onClick={handleToggle}>
                    <label className="search-label">Guests</label>
                    <div className="gray-text">{parseInt(guestCount.children) + parseInt(guestCount.adult) > 1 ? parseInt(guestCount.children) + parseInt(guestCount.adult) : 'Add Guests'}</div>
                </button>
                {toggle && <div className="guests-panel">
                    <div>
                        <p className="bolder">Adults</p>
                        <p className="gray-text">Ages 13 or above</p>
                        <div className="flex align-center space-around">
                            <button type="button" name="adult-subtract" onMouseDown={handleGuestCount} disabled={guestCount.adult === 0}>
                                -
                            </button>
                            {guestCount.adult}
                            <button type="button" name="adult-plus" onMouseDown={handleGuestCount} disabled={guestCount.adult === 20}>
                                +
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="bolder">Children</p>
                        <p className="gray-text">Ages 2-12</p>
                        <div className="flex align-center space-around">
                            <button type="button" name="children-subtract" onMouseDown={handleGuestCount} disabled={guestCount.children === 0}>
                                -
                            </button>
                            {guestCount.children}
                            <button type="button" name="children-plus" onMouseDown={handleGuestCount} disabled={guestCount.children === 20}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                }
                <button type="button" className="search-button" onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#fff" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                    <span className="search-button-text">Search</span>
                </button>
            </div>
        </form>
    )
}

export default Input;

/*
    // minus
    <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path fill="#000" d="M19,13H5V11H19V13Z" />
    </svg>

    // plus
    <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path fill="#000" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
*/