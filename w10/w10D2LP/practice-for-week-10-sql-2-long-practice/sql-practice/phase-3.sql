-- Find Hermione's cats
-- Your code here
SELECT owners.first_name, cats.name FROM owners
JOIN cats ON (owners.id = owner_id)
WHERE first_name = 'Hermione';

-- Find All the Toys for Hermione's cats
-- Your code here
SELECT first_name, cats.name FROM owners
JOIN owners ON (owners.id = owner_id);
WHERE owners.first_name = 'Hermione'