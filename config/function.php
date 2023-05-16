<?php
    if (!function_exists('removeComma')) {
        function removeComma($string) {
            if (preg_match("/^[0-9,]+$/", $string)) {
                $string = str_replace(',', '', $string);
            }
            return $string;
        }
    }

    if (!function_exists('convertToRecursive')) {
        function convertToRecursive($data, $parent_id = 0) {
            $result = [];
            foreach ($data as $key => $item) {
                if ($item['parent_id'] == $parent_id) {
                    $childs = convertToRecursive($data, $item['id']);
                    if ($childs) {
                        $item['childs'] = $childs;
                    }
                    $result[] = $item;
                }
            }
            return $result;
        }
    }

    if (!function_exists('calcSalePrice')) {
        function calcSalePrice($price, $sale_price) {
            return floor(100 - (($sale_price/$price)*100));
        }
    }
?>