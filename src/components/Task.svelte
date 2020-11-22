<script>
	import { Link } from "svelte-routing";
	import { task } from '../store';

	const addField = (event) => {
		event.preventDefault();

		event.srcElement.insertAdjacentHTML("beforeBegin", `<input type="text" class="${
			event.srcElement.id === 'addAlternative' ? 'alternative' : 'criteria'
		}" placeholder="${event.srcElement.id === 'addAlternative' ? 'another alternative' : 'another criteria'}">`);
	}

	const submitTask = (event) => {
		event.preventDefault();

		const newTask = {
			problem: "",
  		alternatives: [],
  		criteria: [],
		}

		newTask.problem = document.querySelector("input#problem").value;

		document.querySelectorAll("input.alternative").forEach(input => {
			newTask.alternatives.push(input.value)
		})

		document.querySelectorAll("input.criteria").forEach(input => {
			newTask.criteria.push(input.value)
		})

		console.log(newTask);

		task.update(newTask => newTask);
	}
</script>

<main class="container">
	<form>
		<h2>Постановка проблемы</h2>

		<label for="problem">Обозначьте проблему</label>
		<input type="text" id="problem" placeholder="Выбор автомобиля | Выбор крема">

		<label for="">Выпишите альтернативы</label>
		<input type="text" class="alternative" placeholder="Audi A6, BMW M5, Mercedes CLS | Nivea, Чёрный жемчуг">
		<button id="addAlternative" class="btn" on:click={addField}>
			<i class="material-icons">add</i>
			Добавить альтернативу
		</button>

		<br>

		<label for="">Определите критерии оценивания</label>
		<input type="text" class="criteria" placeholder="Цена, дизайн, мощность | Цена, увлажнение, гипоалергенность">
		<button id="addCriteria" class="btn" on:click={addField}>
			<i class="material-icons">add</i>
			Добавить критерий
		</button>

		<br>

		<Link to="/solution" on:click={submitTask}>
			<button type="submit" id="submitTask" class="btn">
				Следующий шаг
				<i class="material-icons">chevron_right</i>
			</button>
		</Link>

	</form>
</main>

<style>
	label {
		display: inline-block;
		font-size: 1rem;
		margin: 3rem 0 0.5rem;
	}
	h2 {
		margin: 0;
		font-size: 2.5rem;
	}
	button#submitTask {
		margin-top: 2rem;
		font-size: 1.2rem;
	}
</style>