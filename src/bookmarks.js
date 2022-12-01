import React from "react";

const Bookmarks = ({ bookmarks }) => {
    let bookmarked = bookmarks
    console.log(bookmarks)
    return (
        <div style={{"textAlign":"center"}}>
            <h2>Bookmarks</h2>
            <div className="results">
                {bookmarked && bookmarked.map((image) => {
                    return (
                        <>
                            <div className='imgcon' key={image}>
                                <img className='imgs' src={image.webformatURL} />
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Bookmarks;