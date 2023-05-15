const { createApp } = Vue;

    createApp({
      data() {
        return {
          nomTache: '',
          descriptionTache: '',
          tasks: [],
          done:[],
        };
      },
      methods: {
        ajouter() {
          const task = {
            nomTache: this.nomTache,
            descriptionTache: this.descriptionTache
          };
          this.tasks.push(task);
          this.nomTache = '';
          this.descriptionTache = '';
        },
        cancel(i){
            this.tasks.splice(i,1);
            console.log(i);
        },
        pushy(task,i){
            this.done.push(task);
            this.tasks.splice(i,1);
        }
      }
    }).mount('.wrapper');