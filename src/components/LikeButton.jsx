import React, { useState } from "react";

// storing likes // hook / backend

export default function LikeButton(props) {
    const [like, setLike] = useState(0);
    return (
        <>
            {like}<button onClick={() => setLike(like + 1)}></button>
        </>
    )
}