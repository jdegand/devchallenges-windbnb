import './Stays.css';

function Stays({ filteredStays }){

    return (
        <section className="container">
        <div className="flex between align-center">
            <h1>Stays in Finland</h1>
            <p className="fs-18">{filteredStays.length} stay{filteredStays.length === 1 ? "": "s"}</p>
        </div>
        <div className="grid">
            {filteredStays.map((stay,index)=> (
                <article key={index}>
                    <div className="photo-wrapper">
                        {stay.superHost ? <div className="superhost">Superhost</div> : null}
                        <svg className="heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                        <img className="photo" src={stay.photo} alt={stay.title} />
                    </div>
                    <div className="flex between align-center padding-5">
                        <p className="gray-text">{stay.type}</p>
                        <p className="flex between align-center">
                        <svg className="star" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" role="presentation" focusable="false">
                            <path fill="#ec5f5f" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                        </svg>
                            {stay.rating.toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <p className="title-text">{stay.title}</p>
                    </div>
                </article>
            ))
            
            }
        </div>
        </section>
    )

}

export default Stays;

/*
 {stay.type.includes('Entire') ? null : <p>{stay.beds} beds</p> }
*/