export class Planting {
    public PlantingId: number = 0;
    public UserId!: number;
    public CropId!: number;
    public Area!: number;
    public PlantingTotalCost: number = 0;
    public PlantingDate: Date | undefined
    public FinalDate: Date | undefined
    public Income: number = 0;
    public Profit: number = 0;
    public PlantingState!: string;
    public CropName!:string ;
    public CropImgUrl:string | undefined;
}
