function legendaryFarming(input) {
    let legendaryCard = "";

    let materials = {
        special: { shards: 0, fragments: 0, motes: 0 },
        junk: {}
    }

    input = input.split(" ");
    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1].toLowerCase();

        if (material === "shards") {
            materials.special.shards += quantity;

            if (materials.special.shards >= 250) {
                legendaryCard = "Shadowmourne";
                materials.special.shards -= 250;
                break;
            }
        } else if (material === "fragments") {
            materials.special.fragments += quantity;

            if (materials.special.fragments >= 250) {
                legendaryCard = "Valanyr";
                materials.special.fragments -= 250;
                break;
            }
        } else if (material === "motes") {
            materials.special.motes += quantity;
            
            if (materials.special.motes >= 250) {
                legendaryCard = "Dragonwrath";
                materials.special.motes -= 250;
                break;
            }
        } else {
            if (!materials.junk.hasOwnProperty(material)) {
                materials.junk[material] = quantity;
            } else {
                materials.junk[material] += quantity
            }
        }
    }

    let specialMaterials = Object.entries(materials.special)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .sort((a, b) => b[1] - a[1]);

    let junkMaterials = Object.entries(materials.junk)
    .sort((a, b) => a[0].localeCompare(b[0]));

    let concatMaterials = specialMaterials.concat(junkMaterials);

    console.log(`${legendaryCard} obtained!`);
    
    for (const [material, quantity] of concatMaterials) {
        console.log(`${material}: ${quantity}`);
    }
}

legendaryFarming(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)