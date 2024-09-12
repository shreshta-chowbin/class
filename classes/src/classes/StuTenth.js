class StuTenth
{
    constructor(stuName,telMarks,hinMarks,engMarks,mathsMarks,sciMarks,socMarks)
    {
        this.stuName=stuName;
        this.telMarks=telMarks;
        this.hinMarks=hinMarks;
        this.engMarks=engMarks;
        this.mathsMarks=mathsMarks;
        this.sciMarks=sciMarks;
        this.socMarks=socMarks;

        console.log(stuName,telMarks,hinMarks,engMarks,mathsMarks,sciMarks,socMarks);
    };

    calculateResult=()=>{
        
        let passMarks=35;
        let totMarks= this.telMarks+this.hinMarks+this.engMarks+this.mathsMarks+this.sciMarks+this.socMarks;
        let perc=(totMarks/600)*100;

        if((this.telMarks<0 || this.telMarks>100) || (this.hinMarks<0 || this.hinMarks>100) || (this.engMarks<0 || this.engMarks>100) || (this.mathsMarks<0 || this.mathsMarks>100) ||  (this.sciMarks<0 || this.sciMarks>100) || (this.socMarks<0 || this.socMarks>100))
        {
            console.log('Please Enter Valid Marks');
        }
        else if(this.telMarks>=passMarks && this.hinMarks>=passMarks && this.mathsMarks>=passMarks && this.sciMarks>=passMarks && this.socMarks>=passMarks)
        {
            console.log(`${this.stuName} Has Successfully Passed SSC With ${totMarks}/600 marks and ${perc.toFixed(2)}%`);
        }
        else
        {
            console.log(`${this.stuName} Failed`);
        }

    }
}

export default StuTenth;