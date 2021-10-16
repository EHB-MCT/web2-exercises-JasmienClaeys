class Team {
    constructor(teamname) {
        this.teamname = teamname;
        this.trainername = 'Ash';
        this.pokemonTeam = [];
    }

    describe() {
        let names= [];

        this.pokemonTeam.forEach(element => names.push(element.name));
        return `${this.teamname} with trainer ${this.trainername} has these pokemon: ${[...this.pokemonTeam]}`;
        
    }

}
export default Team;