let render = (data) => {

    let div = document.getElementById('plant-aider');


    data.forEach((item) => {



        let h3_Problem_Name = document.createElement('h3');
        h3_Problem_Name.innerText = item.Problem_Name;
        h3_Problem_Name.style.cssText = 'color:green;';

        let br1 = document.createElement('br');

        let h5_problem = document.createElement('h5');
        h5_problem.innerText = 'Problem: ';
        //b_problem.style.cssText = 'color:green;';

        let p_problem_s = document.createElement('p');
        p_problem_s.innerText = item.Problem;



        let br2 = document.createElement('br');

        let h5_symptom = document.createElement('h5');
        h5_symptom.innerText = 'Symptoms: ';
        //b_problem.style.cssText = 'color:green;';

        let p_symptom_s = document.createElement('p');
        p_symptom_s.innerText = item.Symptom;




        let br3 = document.createElement('br');

        let h5_solution = document.createElement('h5');
        h5_solution.innerText = 'Solution For '+item.Problem_Name+': ';
        //b_problem.style.cssText = 'color:green;';

        let p_solution_s = document.createElement('p');
        p_solution_s.innerText = item.Solution;


        div.append(h3_Problem_Name);


        div.append(br1);
        div.append(h5_problem);
        div.append(p_problem_s);


        div.append(br2);
        div.append(h5_symptom);
        div.append(p_symptom_s);


        div.append(br3);
        div.append(h5_solution);
        div.append(p_solution_s);

    });



};




function tryFixPlantDisease(id){
    var url = 'http://localhost:3000/fix_plant_disease';

    let idObj = {'problemId':id};


    var config = {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(idObj)

    }
    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
        if(data.message=='success'){
            render(data.result);
        }
        else {
            alert(data.message);
        }

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}

let problemId = sessionStorage.getItem('problemId');
tryFixPlantDisease(problemId);
