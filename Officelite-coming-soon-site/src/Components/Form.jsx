import Input from "./Input";
import SelecInput from "./SelectInput";
import Button from "./Button"

export default function Form(){
    return(
        <form action="" className="w-111.25 h-122.25 p-10 space-y-5  bg-Neutral-0 rounded-xl">
            <Input placeholder={'Name'}/>  
            <Input placeholder={'Email Addres'}/> 
            <SelecInput/>
            <Input placeholder={'Phone Number'}/> 
            <Input placeholder={'Company'}/> 
            <div className="mt-10">
                <Button style={'buttonPrimary w-full'} text={'Get on the list'} />
            </div>
        </form>
    )
}