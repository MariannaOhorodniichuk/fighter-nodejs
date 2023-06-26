import { fightRepository } from "../repositories/fightRepository.js";

class FightersService {
  // OPTIONAL TODO: Implement methods to work with fights
  createFight(data) {
    const fight = fightRepository.createFight(data);

    if (!fight) {
      return Error('An error occurred while removing');
    }
    return fight;
}
}

const fightersService = new FightersService();

export { fightersService };
