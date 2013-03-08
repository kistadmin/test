//Path to Files Directory
path="/files/pdf/enrolment/";

//Files = File Description
files=new Array(31);filename=new Array(31);
files[0]="Enrolment Package Cover Letter";filename[0]="Enrolment package cover letter_2012-2013_April.pdf";
files[1]="Enrolment Package Cover Letter";filename[1]="Enrolment package cover letter_2012-2013_April.pdf";
files[2]="Student Emergency Form";filename[2]="Student emergency form.pdf";
files[3]="Parental Consent Form";filename[3]="Parental consent form.pdf";
files[4]="Medical Examination Report";filename[4]="Medical examination report.pdf";
files[5]="School ID Card Application Form";filename[5]="School ID card application form.pdf";
files[6]="School Support Program Option Form";filename[6]="School support program option form.pdf";
files[7]="Payment Options Form";filename[7]="Payment options form.pdf";
files[8]="Japanese Language Self-Evaluation Form";filename[8]="Japanese language self-evaluation form.pdf";
files[9]="Application to Use KIST Online Services";filename[9]="Application to Use KIST Online Services.pdf";
files[10]="Secondary School Enrollment Agreement";filename[10]="Secondary school enrolment agreement.pdf";
files[11]="School Lunch Order Form";filename[11]="School lunch order form.pdf";
files[12]="School Lunch Menu";filename[12]="2013.010203_Lunch Menu.pdf";
files[13]="Student Pickup Authorization Form (K1-K3)";filename[13]="Student pickup authorization form (K1-K3).pdf";
files[14]="School Bus Application Form";filename[14]="School bus application form.pdf";
files[15]="School Bus Stop Pick Up Agreement (G1-G12)";filename[15]="School bus stop pick up agreement (G1-G12).pdf";
files[16]="School Bus Conditions of Use";filename[16]="School bus conditions of use.pdf";
files[17]="School Bus Timetable";filename[17]="School bus timetable.pdf";
files[18]="School Bus Route Map";filename[18]="School bus route map.png";
files[19]="School Bus Stop Location Maps";filename[19]="School bus stop location maps.pdf";
files[20]="Uniform Order Form";filename[20]="Uniform order form.pdf";
files[21]="Donation Form";filename[21]="Donation form.pdf";
files[22]="First Day of School and Parent Welcome Night (K1)";filename[22]="First day of school_K1.pdf";
files[23]="First Day of School and Parent Welcome Night (K2-G1)";filename[23]="First day of school_K2-G1.pdf";
files[24]="First Day of School and Parent Welcome Night (G2-G5)";filename[24]="First day of school_G2-G5.pdf";
files[25]="First Day of School and Parent Welcome Night (G6-G12)";filename[25]="First day of school_G6-G12.pdf";
files[26]="Calendar for Families";filename[26]="CalendarForFamilies_2012-2013.pdf";
files[27]="Beginning K1 at KIST";filename[27]="Beginning K1@KIST_Mid-semester.pdf";
files[28]="Required Textbook List for MYP";filename[28]="Required Textbook List for MYP.pdf";
files[29]="Required Textbook List for DP";filename[29]="Required Textbook List for DP.pdf";
files[30]="First Day of School and Parent Welcome Night (EIC)";filename[30]="First day of school_EIC.pdf";
//Needed or not
n = new Array(35);

function resetN(){
	for (t=0;t<35;t++){
		n[t]=false;
	}
	setDefaults();
}

//Message output
message="";
grade="";
gender="";

//Set Defaults
//1 = REQUIRED FOR ALL
//2 = REQUIRED FOR ONE GRADE OR ANOTHER
//3 = REQUIRED FOR ONE GENDER OR ANOTHER
function setDefaults(){
n[2]=1;
n[3]=1;
n[4]=1;
n[5]=1;
n[6]=1;
n[7]=0;
n[8]=1;
n[9]=1;
n[11]=1;
n[12]=1;
n[14]=1;
n[16]=1;
n[17]=1;
n[18]=0;//School Bus Route Map
n[19]=1;
n[20]=1;
n[21]=1;
n[26]=1;
}



function update(){
//Grade Related
	resetN();
	message="";
	var grade=document.getElementById("selGrade").value;
	switch(grade){
		case "K1":
			n[0]=1;
			n[13]=2;
			n[22]=0;//Parent Welcome Night
			n[27]=2;
		break;
		case "K2":
			n[0]=1;
			n[13]=2;
			n[23]=0;//Parent Welcome Night
		break;
		case "K3":
			n[0]=1;
			n[13]=2;
			n[23]=0;//Parent Welcome Night
		break;
		case "Grade1":
			n[0]=1;
			n[15]=2;
			n[23]=0;//Parent Welcome Night
		break;
		case "Grade2":
			n[0]=1;
			n[15]=2;
			n[24]=0;//Parent Welcome Night
		break;
		case "Grade3":
			n[0]=1;
			n[15]=2;
			n[24]=0;//Parent Welcome Night
		break;
		case "Grade4":
			n[0]=1;
			n[15]=2;
			n[24]=0;//Parent Welcome Night
		break;
		case "Grade5":
			n[0]=1;
			n[15]=2;
			n[24]=0;//Parent Welcome Night
		break;
		case "Grade6":
			n[0]=1;
			n[10]=2;
			n[15]=2;
			n[25]=0;//Parent Welcome Night
			n[28]=2;//MYP Reading List
		break;
		case "Grade6EIC":
			n[1]=1;
			n[10]=2;
			n[15]=2;
			n[30]=0;//Parent Welcome Night
		break;
		case "Grade7":
			n[0]=1;
			n[10]=2;
			n[15]=2;
			n[25]=0;//Parent Welcome Night
			n[28]=2;//MYP Reading List
		break;
		case "Grade7EIC":
			n[1]=1;
			n[10]=2;
			n[15]=2;
			n[30]=0;//Parent Welcome Night
		break;
		case "Grade8":
			n[0]=1;
			n[10]=2;
			n[15]=2;
			n[25]=0;//Parent Welcome Night
			n[28]=2;//MYP Reading List
		break;
		case "Grade8EIC":
			n[1]=1;
			n[10]=2;
			n[15]=2;
			n[30]=0;//Parent Welcome Night
		break;
		case "Grade9":
			n[0]=1;
			n[10]=2;
			n[15]=2;
			n[25]=0;//Parent Welcome Night
			n[28]=2;//MYP Reading List
		break;
		case "Grade9EIC":
			n[1]=1;
			n[10]=2;
			n[15]=2;
			n[30]=0;//Parent Welcome Night
		break;
		case "Grade10":
			n[0]=1;
			n[10]=2;
			n[15]=2;
			n[25]=0;//Parent Welcome Night
			n[28]=2;//MYP Reading List
		break;
		case "Grade11":
			n[0]=1;
			n[10]=2;
			n[15]=2;
			n[25]=0;//Parent Welcome Night
			n[29]=2;//DP Reading List
		break;
	
	}

//Gender related (No More Files of this Type are Used)
//	var gender=document.getElementById("selGender").value;
//	switch(gender){
//		case "Male":
//			n[19]=3;
//			n[20]=0;
//		break;
//		case "Female":
//			n[19]=0;
//			n[20]=3;
//		break;
//	}

	message="";
	message+="<table>";
	
	//Required for all
	message+="<tr><td><b>Required for all students</b></td></tr>";
	for(t=0;t<35;t++){
		if(n[t]==1){
			message+="<tr><td><a href='"+path+filename[t]+"' target='_blank'>"+files[t]+"</a></td></tr>";
		}
	}
	
	//Required for grade level
	message+="<tr><td><b>Required for grade level</b></td></tr>";
	for(t=0;t<35;t++){
		if(n[t]==2){
			message+="<tr><td><a href='"+path+filename[t]+"' target='_blank'>"+files[t]+"</a></td></tr>";
		}
	}	

	//Required for gender
//	message+="<tr><td><b>Required for gender</b></td></tr>";
//	for(t=0;t<30;t++){
//		if(n[t]==3){
//			message+="<tr><td><a href='"+path+filename[t]+"' target='_blank'>"+files[t]+"</a></td></tr>";
//		}
//	}
	
	message+="</table>";
	document.getElementById("divResult").innerHTML=message;
}

function resetDropDowns(){
	document.getElementById("selGrade").selectedIndex = 0; 
//	document.getElementById("selGender").selectedIndex = 0; 
}