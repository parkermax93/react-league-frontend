import React, { useState } from "react";

export default function LikeButton(props) {
    const [like, setLike] = useState(0);
    return (
        <>
            {like}<button onClick={() => setLike(like + 1)}></button>
        </>
    )
}

// not currently being used
