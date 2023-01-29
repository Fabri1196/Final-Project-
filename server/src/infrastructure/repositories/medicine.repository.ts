import { Medicine } from "../../domain/entities/medicine.entity";

class MedicineRepository{
    private medicines : Medicine[];

    constructor(){
        this.medicines = [];
    }

    async save(medicine: Medicine): Promise<void>{
        const saveMedicine = this.medicines.find(m => m.getId() === medicine.getId());

        if(saveMedicine){
            this.medicines.splice(this.medicines.indexOf(medicine, 1));
        }

        this.medicines.push(medicine);
    }

    async findById(id: string): Promise<Medicine | null>{
        const medicine = this.medicines.find(m => m.getId() === id);
        return (medicine) ? medicine: null;
    }

    async findByName(name: string): Promise<Medicine | null>{
        const medicine = this.medicines.find(m => m.getName() === name);
        return (medicine) ? medicine: null;
    }

    async getAllMedicines(): Promise<Medicine[]>{
        return this.medicines;
    }
}

export default new MedicineRepository();