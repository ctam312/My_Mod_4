SELECT owners.first_name, cats.name FROM owners
JOIN owners ON (owners.id = owner_id);
WHERE owners.first_name = 'Hermione'