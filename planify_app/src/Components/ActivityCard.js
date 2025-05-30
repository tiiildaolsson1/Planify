// korten som kommer upp med förslagna aktivttier 

export default function ActivityCard({ events = [] }) {
    const firstEvent = events[0]; 
  
    return (
      <div className="Saved">
        <section id="list1">
        <img src="/images/saveheart.svg" alt="Save" className="save-heart" />
          {firstEvent ? (
            <>
         {/* Detta som gör att musik bingon syns, lägg till så de eve. väljs pga ålder och tid med */} 
              <h3>{firstEvent.name}</h3>
              {firstEvent._embedded?.venues && (
                <p>{firstEvent._embedded.venues[0].name}</p>
              )}
              <p>{firstEvent.dates.start.localDate}</p>
              <a className="merinfoboxrec" href={firstEvent.url} target="_blank" rel="noopener noreferrer">
                Mer info
              </a>
            </>
          ) : (
            <h3>aktivitet 1</h3>
          )}
        </section>
    {/* fortsätt här, tänkte ge de tre olika alternativ, musik, sport och kanske teater? */} 
        <section id="list1">
        <img src="/images/saveheart.svg" alt="Save" className="save-heart" />
          <h3>aktivitet 2</h3>
        </section>
         {/* fortsätt här, tänkte ge de tre olika alternativ, musik, sport och kanske teater? */} 
        <section id="list1">
        <img src="/images/saveheart.svg" alt="Save" className="save-heart" />
          <h3>aktivitet 3</h3>
        </section>
      </div>
    );
  }