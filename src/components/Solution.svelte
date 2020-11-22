<script>
	import { task } from '../store';

	// Describe table constructors
	// task - newTask
	// types: localCriterias / localAlternatives / globalCriterias / globalAlternatives
	const createTables = (task, type) => {
		let newTable = ``;

		for (let i = 0; i < task.alternatives.length; i++) {
			let row = ``;

			for (let j = 0; j < task.criteria.length; j++) {
				let col = null;

				if (i === 0 && j === 0) {
					col = task.problem;
				} else if (i === 0 || j === 0) {
					// col = task.
					// !!! I think we need to store data as two sided array
				}

				row += col;
			}

			newTable += row;
		}

		// document.querySelector("#solutionTables").append(newTable);
	}

	// Watch for store change and create tables
	task.subscribe(newTask => {
		createTables(newTask, "localCriterias");
	});




</script>

<main class="container">
	<div id="solutionTables">

	</div>
</main>