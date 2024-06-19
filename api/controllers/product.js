import { db } from "../db.js";

export const getProducts = (_, res) => {
    const q = "SELECT * FROM produtos";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

  export const addProduct = (req, res) => {
    const q =
      "INSERT INTO produtos(`nome`, `preco`, `validade`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.preco,
      req.body.validade,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto criado!");
    });
  };
  
  export const updateProduct = (req, res) => {
    const q =
      "UPDATE produtos SET `nome` = ?, `preco` = ?, `validade` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.preco,
      req.body.validade,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto atualizado.");
    });
  };

  export const deleteProduct = (req, res) => {
    const q = "DELETE FROM produtos WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto deletado.");
    });
  };