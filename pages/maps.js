
import React from "react";
import dynamic from "next/dynamic";

function map() {
    const MapWithNoSSR = dynamic(() => import("../api/maps"), {
        ssr: false
      })
    return (
        <main>
            <div id="map">
                <MapWithNoSSR />
            </div>
        </main>
    )
}
export default map;