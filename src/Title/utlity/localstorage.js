const getDonateCategory = () =>{
    const storedDonation = localStorage.getItem('donation-detail');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonation = id =>{
    const storedDonations = getDonateCategory();
    const exists = storedDonations.find(donateId => donateId===id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation-detail',JSON.stringify(storedDonations))
    }
}

export {saveDonation, getDonateCategory}