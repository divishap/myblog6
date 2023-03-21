function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
        classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BJyrhDZqk/model.json",modelReady);
        
    }
    
    function modelReady(){
        console.log("modelloded");
        classifier.classify(gotResults);
    
    }

    function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            random_number_r=Math.floor(Math.random()*255)+1;
            random_number_g=Math.floor(Math.random()*255)+1;
            random_number_b=Math.floor(Math.random()*255)+1;
            document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
            document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
            document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
           img1=document.getElementById("cat");
           img2=document.getElementById("dog");
           img3=document.getElementById("cow");
           img4=document.getElementById("lion");
            
           if(results[0].label=="mew"){
            img1.src="animals1";
            img2.src="animals2";
            img3.src="animals3";
            img4.src="animals4";

            
           }
    
           else if(results[0].label=="barking"){
            img1.src="animals3";
            img2.src="animals4";
            
            img3.src="animals2";
            img4.src="animals1";
           }
           
           else if(results[0].label=="moo"){
            img1.src="animals2";
            img2.src="animals4";
            img3.src="animals3";
            img4.src="animals1";
           }
           else if(results[0].label=="roar"){
            img1.src="animals4";
            img2.src="animals3";
            img3.src="animals2";
            img4.src="animals1";
           }
        }
    }