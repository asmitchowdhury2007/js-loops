/**
 * 🪔 Sharma ji ki Diwali Decoration
 *
 * Sharma ji apne ghar ko Diwali pe sajana chahte hain light strings se.
 * Unke paas ek budget hai aur market mein alag alag colors ki light strings
 * hain different lengths mein. Sharma ji sab kuch lena chahte hain, lekin
 * budget se zyada nahi!
 *
 * Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
 *
 * Rules:
 *   Step 1 - Use for...of to loop through lightStrings and add ALL of them
 *     to selected list with their cost calculated
 *   Step 2 - Use a while loop to check: agar totalCost > budget, toh remove
 *     the LAST item from selected, subtract its cost, and keep removing until
 *     totalCost <= budget
 *
 * @param {Array<{color: string, length: number}>} lightStrings - Available light strings
 * @param {number} budget - Sharma ji ka budget in rupees
 * @returns {{ selected: Array<{color: string, length: number, cost: number}>, totalLength: number, totalCost: number }}
 *
 * Validation:
 *   - Agar lightStrings array nahi hai ya budget positive number nahi hai,
 *     return: { selected: [], totalLength: 0, totalCost: 0 }
 *
 * @example
 *   diwaliLightsPlan(
 *     [{ color: "golden", length: 5 }, { color: "white", length: 10 }, { color: "multicolor", length: 3 }],
 *     400
 *   )
 *   // golden: 5*50=250, white: 10*30=300, multicolor: 3*40=120
 *   // Total = 670 > 400, remove multicolor (670-120=550), still > 400,
 *   // remove white (550-300=250), 250 <= 400
 *   // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
 */
export function diwaliLightsPlan(lightStrings, budget) {
  if(Array.isArray(lightStrings) && lightStrings.length > 0 && typeof (budget)==="number" && budget > 0){
    let result = {};
    let selected = [];
    let totalLength = 0;
    let totalCost = 0;
    for(let i = 0; i<lightStrings.length; i++){
      
      totalLength += lightStrings[i].length;
      if (lightStrings[i].color === "golden"){
        totalCost += 50*(lightStrings[i].length);
        lightStrings[i].cost = 50*(lightStrings[i].length);
      }
      else if (lightStrings[i].color === "multicolor"){
        totalCost += 40*(lightStrings[i].length);
        lightStrings[i].cost = 40*(lightStrings[i].length);
      }
      else if (lightStrings[i].color === "white"){
        totalCost += 30*(lightStrings[i].length);
        lightStrings[i].cost = 30*(lightStrings[i].length);
      }
      else{
        totalCost += 35*(lightStrings[i].length);
        lightStrings[i].cost = 35*(lightStrings[i].length);
      }
      selected.push(lightStrings[i]);
    }
    while (totalCost > budget){
      let remove_item = selected.pop();
      if (remove_item.color === "golden"){
        totalCost = totalCost - 50*(remove_item.length);
        totalLength = totalLength - remove_item.length;
      }
      else if (remove_item.color === "multicolor"){
        totalCost = totalCost - 40*(remove_item.length);
        totalLength = totalLength - remove_item.length;
      }
      else if (remove_item.color === "white"){
        totalCost = totalCost - 30*(remove_item.length);
        totalLength = totalLength - remove_item.length;
      }
      else{
        totalCost = totalCost - 35*(remove_item.length);
        totalLength = totalLength - remove_item.length;
      }
    }
    result.selected = selected;
    result.totalLength = totalLength;
    result.totalCost = totalCost;
    return result;
  }
  return { selected: [], totalLength: 0, totalCost: 0 }
}
