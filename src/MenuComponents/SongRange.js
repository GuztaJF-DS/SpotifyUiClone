import { useState } from 'react';
import { Range } from 'react-range';

export default function SongRange(){
    const [Values,setValues]=useState([0]);
    return(
            <Range
                values={Values}
                step={1}
                min={0}
                max={100}
                onChange={(value) => setValues( value )}
                renderTrack={({ props, children }) => (
                    <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        display:"flex",
                        height: "12px",
                        position:"static",
                        marginTop:"-6px",
                        width: "50vw",
                        justifyContent: "center",
                    }}
                    >
                    <div
                        ref={props.ref}
                        style={{
                        height: "50%",
                        width: "100%",
                        borderRadius: "4px",
                        background: "#FFF",
                        alignSelf: "center"
                        }}
                    >
                        {children}
                    </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                    {...props}
                    style={{
                        ...props.style,
                        height: "10px",
                        width: "10px",
                        borderRadius: "100%",
                        backgroundColor: "#FFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA"
                    }}
                    >
                    <div
                        style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "100%",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC"
                        }}
                    />
                    </div>
                )}
            />
        )
} 