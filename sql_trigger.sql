CREATE OR REPLACE FUNCTION inc_count_of_item()
RETURNS TRIGGER AS 
$$
BEGIN
    UPDATE api_category
    SET count=count + 1 
    from api_items
    WHERE api_category.id=api_items.category_id
    and api_items.id = (SELECT max(id) FROM api_items); 
    RETURN NEW;
END
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION inc_count_of_item_m()
RETURNS TRIGGER AS 
$$
BEGIN
    UPDATE api_manufacturers 
    SET count=count + 1 
    from api_items 
    WHERE api_manufacturers.id=api_items.manufacturer_id
    and api_items.id = (SELECT max(id) FROM api_items);
    RETURN NEW;
END
$$
LANGUAGE 'plpgsql';


CREATE OR REPLACE TRIGGER inc_count
    AFTER INSERT ON api_items
    FOR EACH ROW
    EXECUTE FUNCTION inc_count_of_item();

CREATE OR REPLACE TRIGGER inc_count_m
    AFTER INSERT ON api_items
    FOR EACH ROW
    EXECUTE FUNCTION inc_count_of_item_m();

    