defmodule Ie11Lv.Repo do
  use Ecto.Repo,
    otp_app: :ie11_lv,
    adapter: Ecto.Adapters.Postgres
end
