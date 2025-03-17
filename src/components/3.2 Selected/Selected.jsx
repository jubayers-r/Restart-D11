const Selected = ({selected, handleDeselected}) => {
    const {id, name, type_of_player, picture} = selected;
    return (
        <>
        <div className="col-span-3">
            <div className="flex justify-between p-6 bg-gray-200 rounded-2xl w-full place-items-center">
            <div className="flex gap-4 place-items-center">
                <div className="w-25">
                    <img src={picture} alt="" className="rounded-2xl" />
                </div>
                <div>
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="font-medium text-sm">{type_of_player}</p>
                </div>
            </div>
            <div onClick={() => {handleDeselected({id})}}>
                <img width="50" height="50" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FA5252/external-dustbin-ux-and-ui-flatart-icons-outline-flatarticons.png"/>
            </div>
            </div>
        </div>
        
        </>
    );
};

export default Selected;